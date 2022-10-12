import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_pokeathlon_statsWhereUniqueInput } from './nature-pokeathlon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { nature_pokeathlon_statsUpdateWithoutPokeathlon_statsInput } from './nature-pokeathlon-stats-update-without-pokeathlon-stats.input';

@InputType()
export class nature_pokeathlon_statsUpdateWithWhereUniqueWithoutPokeathlon_statsInput {

    @Field(() => nature_pokeathlon_statsWhereUniqueInput, {nullable:false})
    @Type(() => nature_pokeathlon_statsWhereUniqueInput)
    where!: nature_pokeathlon_statsWhereUniqueInput;

    @Field(() => nature_pokeathlon_statsUpdateWithoutPokeathlon_statsInput, {nullable:false})
    @Type(() => nature_pokeathlon_statsUpdateWithoutPokeathlon_statsInput)
    data!: nature_pokeathlon_statsUpdateWithoutPokeathlon_statsInput;
}
