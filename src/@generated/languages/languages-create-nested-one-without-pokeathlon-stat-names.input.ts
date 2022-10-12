import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokeathlon_stat_namesInput } from './languages-create-without-pokeathlon-stat-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokeathlon_stat_namesInput } from './languages-create-or-connect-without-pokeathlon-stat-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutPokeathlon_stat_namesInput {

    @Field(() => languagesCreateWithoutPokeathlon_stat_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokeathlon_stat_namesInput)
    create?: languagesCreateWithoutPokeathlon_stat_namesInput;

    @Field(() => languagesCreateOrConnectWithoutPokeathlon_stat_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokeathlon_stat_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokeathlon_stat_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
