import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class item_flag_mapUncheckedCreateWithoutItem_flagsInput {

    @Field(() => Int, {nullable:false})
    item_id!: number;
}
