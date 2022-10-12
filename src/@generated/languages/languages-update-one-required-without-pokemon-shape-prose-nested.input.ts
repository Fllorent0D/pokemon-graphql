import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokemon_shape_proseInput } from './languages-create-without-pokemon-shape-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokemon_shape_proseInput } from './languages-create-or-connect-without-pokemon-shape-prose.input';
import { languagesUpsertWithoutPokemon_shape_proseInput } from './languages-upsert-without-pokemon-shape-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutPokemon_shape_proseInput } from './languages-update-without-pokemon-shape-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutPokemon_shape_proseNestedInput {

    @Field(() => languagesCreateWithoutPokemon_shape_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokemon_shape_proseInput)
    create?: languagesCreateWithoutPokemon_shape_proseInput;

    @Field(() => languagesCreateOrConnectWithoutPokemon_shape_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokemon_shape_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokemon_shape_proseInput;

    @Field(() => languagesUpsertWithoutPokemon_shape_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutPokemon_shape_proseInput)
    upsert?: languagesUpsertWithoutPokemon_shape_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutPokemon_shape_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutPokemon_shape_proseInput)
    update?: languagesUpdateWithoutPokemon_shape_proseInput;
}
