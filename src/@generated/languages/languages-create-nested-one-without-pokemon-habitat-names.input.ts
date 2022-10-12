import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokemon_habitat_namesInput } from './languages-create-without-pokemon-habitat-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokemon_habitat_namesInput } from './languages-create-or-connect-without-pokemon-habitat-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutPokemon_habitat_namesInput {

    @Field(() => languagesCreateWithoutPokemon_habitat_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokemon_habitat_namesInput)
    create?: languagesCreateWithoutPokemon_habitat_namesInput;

    @Field(() => languagesCreateOrConnectWithoutPokemon_habitat_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokemon_habitat_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokemon_habitat_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
