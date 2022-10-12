import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_typesWhereInput } from '../pokemon-types/pokemon-types-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonTypesArgs {

    @Field(() => pokemon_typesWhereInput, {nullable:true})
    @Type(() => pokemon_typesWhereInput)
    where?: pokemon_typesWhereInput;
}
