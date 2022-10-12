import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_formsUpdateInput } from '../pokemon-forms/pokemon-forms-update.input';
import { Type } from 'class-transformer';
import { pokemon_formsWhereUniqueInput } from '../pokemon-forms/pokemon-forms-where-unique.input';

@ArgsType()
export class UpdateOnepokemonFormsArgs {

    @Field(() => pokemon_formsUpdateInput, {nullable:false})
    @Type(() => pokemon_formsUpdateInput)
    data!: pokemon_formsUpdateInput;

    @Field(() => pokemon_formsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_formsWhereUniqueInput)
    where!: pokemon_formsWhereUniqueInput;
}
