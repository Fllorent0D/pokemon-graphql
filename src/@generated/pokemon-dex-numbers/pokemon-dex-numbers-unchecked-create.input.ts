import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokemon_dex_numbersUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    species_id!: number;

    @Field(() => Int, {nullable:false})
    pokedex_id!: number;

    @Field(() => Int, {nullable:false})
    pokedex_number!: number;
}
