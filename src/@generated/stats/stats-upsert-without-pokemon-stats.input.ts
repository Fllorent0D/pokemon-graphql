import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsUpdateWithoutPokemon_statsInput } from './stats-update-without-pokemon-stats.input';
import { Type } from 'class-transformer';
import { statsCreateWithoutPokemon_statsInput } from './stats-create-without-pokemon-stats.input';

@InputType()
export class statsUpsertWithoutPokemon_statsInput {

    @Field(() => statsUpdateWithoutPokemon_statsInput, {nullable:false})
    @Type(() => statsUpdateWithoutPokemon_statsInput)
    update!: statsUpdateWithoutPokemon_statsInput;

    @Field(() => statsCreateWithoutPokemon_statsInput, {nullable:false})
    @Type(() => statsCreateWithoutPokemon_statsInput)
    create!: statsCreateWithoutPokemon_statsInput;
}
