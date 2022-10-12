import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_formsWhereUniqueInput } from '../pokemon-forms/pokemon-forms-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_formsCreateInput } from '../pokemon-forms/pokemon-forms-create.input';
import { pokemon_formsUpdateInput } from '../pokemon-forms/pokemon-forms-update.input';

@ArgsType()
export class UpsertOnepokemonFormsArgs {

    @Field(() => pokemon_formsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_formsWhereUniqueInput)
    where!: pokemon_formsWhereUniqueInput;

    @Field(() => pokemon_formsCreateInput, {nullable:false})
    @Type(() => pokemon_formsCreateInput)
    create!: pokemon_formsCreateInput;

    @Field(() => pokemon_formsUpdateInput, {nullable:false})
    @Type(() => pokemon_formsUpdateInput)
    update!: pokemon_formsUpdateInput;
}
