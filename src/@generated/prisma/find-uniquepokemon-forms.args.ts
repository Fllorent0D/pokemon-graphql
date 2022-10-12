import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_formsWhereUniqueInput } from '../pokemon-forms/pokemon-forms-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepokemonFormsArgs {

    @Field(() => pokemon_formsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_formsWhereUniqueInput)
    where!: pokemon_formsWhereUniqueInput;
}
