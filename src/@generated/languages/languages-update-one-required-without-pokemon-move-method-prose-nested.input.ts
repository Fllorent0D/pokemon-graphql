import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokemon_move_method_proseInput } from './languages-create-without-pokemon-move-method-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokemon_move_method_proseInput } from './languages-create-or-connect-without-pokemon-move-method-prose.input';
import { languagesUpsertWithoutPokemon_move_method_proseInput } from './languages-upsert-without-pokemon-move-method-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutPokemon_move_method_proseInput } from './languages-update-without-pokemon-move-method-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutPokemon_move_method_proseNestedInput {

    @Field(() => languagesCreateWithoutPokemon_move_method_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokemon_move_method_proseInput)
    create?: languagesCreateWithoutPokemon_move_method_proseInput;

    @Field(() => languagesCreateOrConnectWithoutPokemon_move_method_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokemon_move_method_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokemon_move_method_proseInput;

    @Field(() => languagesUpsertWithoutPokemon_move_method_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutPokemon_move_method_proseInput)
    upsert?: languagesUpsertWithoutPokemon_move_method_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutPokemon_move_method_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutPokemon_move_method_proseInput)
    update?: languagesUpdateWithoutPokemon_move_method_proseInput;
}
