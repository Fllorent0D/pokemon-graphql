import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_statsWhereInput } from '../pokemon-stats/pokemon-stats-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonStatsArgs {

    @Field(() => pokemon_statsWhereInput, {nullable:true})
    @Type(() => pokemon_statsWhereInput)
    where?: pokemon_statsWhereInput;
}
