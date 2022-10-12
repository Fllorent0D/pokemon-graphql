import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemonWhereInput } from './pokemon-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonArgs {

    @Field(() => pokemonWhereInput, {nullable:true})
    @Type(() => pokemonWhereInput)
    where?: pokemonWhereInput;
}
