import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_statsUpdateWithoutNature_pokeathlon_statsInput } from './pokeathlon-stats-update-without-nature-pokeathlon-stats.input';
import { Type } from 'class-transformer';
import { pokeathlon_statsCreateWithoutNature_pokeathlon_statsInput } from './pokeathlon-stats-create-without-nature-pokeathlon-stats.input';

@InputType()
export class pokeathlon_statsUpsertWithoutNature_pokeathlon_statsInput {

    @Field(() => pokeathlon_statsUpdateWithoutNature_pokeathlon_statsInput, {nullable:false})
    @Type(() => pokeathlon_statsUpdateWithoutNature_pokeathlon_statsInput)
    update!: pokeathlon_statsUpdateWithoutNature_pokeathlon_statsInput;

    @Field(() => pokeathlon_statsCreateWithoutNature_pokeathlon_statsInput, {nullable:false})
    @Type(() => pokeathlon_statsCreateWithoutNature_pokeathlon_statsInput)
    create!: pokeathlon_statsCreateWithoutNature_pokeathlon_statsInput;
}
