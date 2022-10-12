import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_namesCreateWithoutPokemon_formsInput } from './pokemon-form-names-create-without-pokemon-forms.input';
import { Type } from 'class-transformer';
import { pokemon_form_namesCreateOrConnectWithoutPokemon_formsInput } from './pokemon-form-names-create-or-connect-without-pokemon-forms.input';
import { pokemon_form_namesUpsertWithWhereUniqueWithoutPokemon_formsInput } from './pokemon-form-names-upsert-with-where-unique-without-pokemon-forms.input';
import { pokemon_form_namesWhereUniqueInput } from './pokemon-form-names-where-unique.input';
import { pokemon_form_namesUpdateWithWhereUniqueWithoutPokemon_formsInput } from './pokemon-form-names-update-with-where-unique-without-pokemon-forms.input';
import { pokemon_form_namesUpdateManyWithWhereWithoutPokemon_formsInput } from './pokemon-form-names-update-many-with-where-without-pokemon-forms.input';
import { pokemon_form_namesScalarWhereInput } from './pokemon-form-names-scalar-where.input';

@InputType()
export class pokemon_form_namesUpdateManyWithoutPokemon_formsNestedInput {

    @Field(() => [pokemon_form_namesCreateWithoutPokemon_formsInput], {nullable:true})
    @Type(() => pokemon_form_namesCreateWithoutPokemon_formsInput)
    create?: Array<pokemon_form_namesCreateWithoutPokemon_formsInput>;

    @Field(() => [pokemon_form_namesCreateOrConnectWithoutPokemon_formsInput], {nullable:true})
    @Type(() => pokemon_form_namesCreateOrConnectWithoutPokemon_formsInput)
    connectOrCreate?: Array<pokemon_form_namesCreateOrConnectWithoutPokemon_formsInput>;

    @Field(() => [pokemon_form_namesUpsertWithWhereUniqueWithoutPokemon_formsInput], {nullable:true})
    @Type(() => pokemon_form_namesUpsertWithWhereUniqueWithoutPokemon_formsInput)
    upsert?: Array<pokemon_form_namesUpsertWithWhereUniqueWithoutPokemon_formsInput>;

    @Field(() => [pokemon_form_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_form_namesWhereUniqueInput)
    set?: Array<pokemon_form_namesWhereUniqueInput>;

    @Field(() => [pokemon_form_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_form_namesWhereUniqueInput)
    disconnect?: Array<pokemon_form_namesWhereUniqueInput>;

    @Field(() => [pokemon_form_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_form_namesWhereUniqueInput)
    delete?: Array<pokemon_form_namesWhereUniqueInput>;

    @Field(() => [pokemon_form_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_form_namesWhereUniqueInput)
    connect?: Array<pokemon_form_namesWhereUniqueInput>;

    @Field(() => [pokemon_form_namesUpdateWithWhereUniqueWithoutPokemon_formsInput], {nullable:true})
    @Type(() => pokemon_form_namesUpdateWithWhereUniqueWithoutPokemon_formsInput)
    update?: Array<pokemon_form_namesUpdateWithWhereUniqueWithoutPokemon_formsInput>;

    @Field(() => [pokemon_form_namesUpdateManyWithWhereWithoutPokemon_formsInput], {nullable:true})
    @Type(() => pokemon_form_namesUpdateManyWithWhereWithoutPokemon_formsInput)
    updateMany?: Array<pokemon_form_namesUpdateManyWithWhereWithoutPokemon_formsInput>;

    @Field(() => [pokemon_form_namesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_form_namesScalarWhereInput)
    deleteMany?: Array<pokemon_form_namesScalarWhereInput>;
}
