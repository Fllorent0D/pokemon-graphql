import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_typesWhereUniqueInput } from '../pokemon-types/pokemon-types-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepokemonTypesArgs {

    @Field(() => pokemon_typesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_typesWhereUniqueInput)
    where!: pokemon_typesWhereUniqueInput;
}
