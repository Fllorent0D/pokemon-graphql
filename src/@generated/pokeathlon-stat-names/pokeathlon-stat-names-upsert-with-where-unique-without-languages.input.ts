import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_stat_namesWhereUniqueInput } from './pokeathlon-stat-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokeathlon_stat_namesUpdateWithoutLanguagesInput } from './pokeathlon-stat-names-update-without-languages.input';
import { pokeathlon_stat_namesCreateWithoutLanguagesInput } from './pokeathlon-stat-names-create-without-languages.input';

@InputType()
export class pokeathlon_stat_namesUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => pokeathlon_stat_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokeathlon_stat_namesWhereUniqueInput)
    where!: pokeathlon_stat_namesWhereUniqueInput;

    @Field(() => pokeathlon_stat_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokeathlon_stat_namesUpdateWithoutLanguagesInput)
    update!: pokeathlon_stat_namesUpdateWithoutLanguagesInput;

    @Field(() => pokeathlon_stat_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokeathlon_stat_namesCreateWithoutLanguagesInput)
    create!: pokeathlon_stat_namesCreateWithoutLanguagesInput;
}
