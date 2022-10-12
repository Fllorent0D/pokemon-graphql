import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnepokemonArgs {

    @Field(() => pokemonWhereUniqueInput, {nullable:false})
    @Type(() => pokemonWhereUniqueInput)
    where!: pokemonWhereUniqueInput;
}
