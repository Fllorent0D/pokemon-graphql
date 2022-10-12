import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_statsUpdateWithoutPokeathlon_stat_namesInput } from './pokeathlon-stats-update-without-pokeathlon-stat-names.input';
import { Type } from 'class-transformer';
import { pokeathlon_statsCreateWithoutPokeathlon_stat_namesInput } from './pokeathlon-stats-create-without-pokeathlon-stat-names.input';

@InputType()
export class pokeathlon_statsUpsertWithoutPokeathlon_stat_namesInput {

    @Field(() => pokeathlon_statsUpdateWithoutPokeathlon_stat_namesInput, {nullable:false})
    @Type(() => pokeathlon_statsUpdateWithoutPokeathlon_stat_namesInput)
    update!: pokeathlon_statsUpdateWithoutPokeathlon_stat_namesInput;

    @Field(() => pokeathlon_statsCreateWithoutPokeathlon_stat_namesInput, {nullable:false})
    @Type(() => pokeathlon_statsCreateWithoutPokeathlon_stat_namesInput)
    create!: pokeathlon_statsCreateWithoutPokeathlon_stat_namesInput;
}
