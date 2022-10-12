import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokemon_color_namesInput } from './languages-create-without-pokemon-color-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokemon_color_namesInput } from './languages-create-or-connect-without-pokemon-color-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutPokemon_color_namesInput {

    @Field(() => languagesCreateWithoutPokemon_color_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokemon_color_namesInput)
    create?: languagesCreateWithoutPokemon_color_namesInput;

    @Field(() => languagesCreateOrConnectWithoutPokemon_color_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokemon_color_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokemon_color_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
