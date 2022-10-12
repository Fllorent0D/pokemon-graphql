import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_typesWhereUniqueInput } from '../pokemon-types/pokemon-types-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_typesCreateInput } from '../pokemon-types/pokemon-types-create.input';
import { pokemon_typesUpdateInput } from '../pokemon-types/pokemon-types-update.input';

@ArgsType()
export class UpsertOnepokemonTypesArgs {

    @Field(() => pokemon_typesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_typesWhereUniqueInput)
    where!: pokemon_typesWhereUniqueInput;

    @Field(() => pokemon_typesCreateInput, {nullable:false})
    @Type(() => pokemon_typesCreateInput)
    create!: pokemon_typesCreateInput;

    @Field(() => pokemon_typesUpdateInput, {nullable:false})
    @Type(() => pokemon_typesUpdateInput)
    update!: pokemon_typesUpdateInput;
}
