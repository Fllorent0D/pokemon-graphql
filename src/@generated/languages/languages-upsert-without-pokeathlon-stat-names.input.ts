import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutPokeathlon_stat_namesInput } from './languages-update-without-pokeathlon-stat-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokeathlon_stat_namesInput } from './languages-create-without-pokeathlon-stat-names.input';

@InputType()
export class languagesUpsertWithoutPokeathlon_stat_namesInput {

    @Field(() => languagesUpdateWithoutPokeathlon_stat_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutPokeathlon_stat_namesInput)
    update!: languagesUpdateWithoutPokeathlon_stat_namesInput;

    @Field(() => languagesCreateWithoutPokeathlon_stat_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokeathlon_stat_namesInput)
    create!: languagesCreateWithoutPokeathlon_stat_namesInput;
}
