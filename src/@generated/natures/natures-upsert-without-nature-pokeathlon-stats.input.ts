import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesUpdateWithoutNature_pokeathlon_statsInput } from './natures-update-without-nature-pokeathlon-stats.input';
import { Type } from 'class-transformer';
import { naturesCreateWithoutNature_pokeathlon_statsInput } from './natures-create-without-nature-pokeathlon-stats.input';

@InputType()
export class naturesUpsertWithoutNature_pokeathlon_statsInput {

    @Field(() => naturesUpdateWithoutNature_pokeathlon_statsInput, {nullable:false})
    @Type(() => naturesUpdateWithoutNature_pokeathlon_statsInput)
    update!: naturesUpdateWithoutNature_pokeathlon_statsInput;

    @Field(() => naturesCreateWithoutNature_pokeathlon_statsInput, {nullable:false})
    @Type(() => naturesCreateWithoutNature_pokeathlon_statsInput)
    create!: naturesCreateWithoutNature_pokeathlon_statsInput;
}
