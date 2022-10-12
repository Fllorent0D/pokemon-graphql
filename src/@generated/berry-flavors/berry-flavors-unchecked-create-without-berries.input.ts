import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class berry_flavorsUncheckedCreateWithoutBerriesInput {

    @Field(() => Int, {nullable:false})
    contest_type_id!: number;

    @Field(() => Int, {nullable:false})
    flavor!: number;
}
