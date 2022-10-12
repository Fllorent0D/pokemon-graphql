import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokeathlon_stat_namesInput } from './languages-create-without-pokeathlon-stat-names.input';

@InputType()
export class languagesCreateOrConnectWithoutPokeathlon_stat_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutPokeathlon_stat_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokeathlon_stat_namesInput)
    create!: languagesCreateWithoutPokeathlon_stat_namesInput;
}
