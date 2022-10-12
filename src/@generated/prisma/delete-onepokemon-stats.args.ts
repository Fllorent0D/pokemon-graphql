import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_statsWhereUniqueInput } from '../pokemon-stats/pokemon-stats-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnepokemonStatsArgs {

    @Field(() => pokemon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_statsWhereUniqueInput)
    where!: pokemon_statsWhereUniqueInput;
}
