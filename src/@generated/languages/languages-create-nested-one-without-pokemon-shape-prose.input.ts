import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokemon_shape_proseInput } from './languages-create-without-pokemon-shape-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokemon_shape_proseInput } from './languages-create-or-connect-without-pokemon-shape-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutPokemon_shape_proseInput {

    @Field(() => languagesCreateWithoutPokemon_shape_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokemon_shape_proseInput)
    create?: languagesCreateWithoutPokemon_shape_proseInput;

    @Field(() => languagesCreateOrConnectWithoutPokemon_shape_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokemon_shape_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokemon_shape_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
