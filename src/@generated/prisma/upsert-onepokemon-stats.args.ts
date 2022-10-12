import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_statsWhereUniqueInput } from '../pokemon-stats/pokemon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_statsCreateInput } from '../pokemon-stats/pokemon-stats-create.input';
import { pokemon_statsUpdateInput } from '../pokemon-stats/pokemon-stats-update.input';

@ArgsType()
export class UpsertOnepokemonStatsArgs {

    @Field(() => pokemon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_statsWhereUniqueInput)
    where!: pokemon_statsWhereUniqueInput;

    @Field(() => pokemon_statsCreateInput, {nullable:false})
    @Type(() => pokemon_statsCreateInput)
    create!: pokemon_statsCreateInput;

    @Field(() => pokemon_statsUpdateInput, {nullable:false})
    @Type(() => pokemon_statsUpdateInput)
    update!: pokemon_statsUpdateInput;
}
