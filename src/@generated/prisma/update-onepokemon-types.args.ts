import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_typesUpdateInput } from '../pokemon-types/pokemon-types-update.input';
import { Type } from 'class-transformer';
import { pokemon_typesWhereUniqueInput } from '../pokemon-types/pokemon-types-where-unique.input';

@ArgsType()
export class UpdateOnepokemonTypesArgs {

    @Field(() => pokemon_typesUpdateInput, {nullable:false})
    @Type(() => pokemon_typesUpdateInput)
    data!: pokemon_typesUpdateInput;

    @Field(() => pokemon_typesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_typesWhereUniqueInput)
    where!: pokemon_typesWhereUniqueInput;
}
