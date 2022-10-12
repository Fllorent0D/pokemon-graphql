import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class item_flag_mapUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    item_flag_id!: number;
}
