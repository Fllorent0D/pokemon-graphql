import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokemon_move_method_proseInput } from './languages-create-without-pokemon-move-method-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokemon_move_method_proseInput } from './languages-create-or-connect-without-pokemon-move-method-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutPokemon_move_method_proseInput {

    @Field(() => languagesCreateWithoutPokemon_move_method_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokemon_move_method_proseInput)
    create?: languagesCreateWithoutPokemon_move_method_proseInput;

    @Field(() => languagesCreateOrConnectWithoutPokemon_move_method_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokemon_move_method_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokemon_move_method_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
