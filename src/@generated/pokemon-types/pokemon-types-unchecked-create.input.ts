import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokemon_typesUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    type_id!: number;

    @Field(() => Int, {nullable:false})
    slot!: number;
}
