import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_namesCreateWithoutLanguagesInput } from './pokemon-form-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokemon_form_namesCreateOrConnectWithoutLanguagesInput } from './pokemon-form-names-create-or-connect-without-languages.input';
import { pokemon_form_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './pokemon-form-names-upsert-with-where-unique-without-languages.input';
import { pokemon_form_namesWhereUniqueInput } from './pokemon-form-names-where-unique.input';
import { pokemon_form_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './pokemon-form-names-update-with-where-unique-without-languages.input';
import { pokemon_form_namesUpdateManyWithWhereWithoutLanguagesInput } from './pokemon-form-names-update-many-with-where-without-languages.input';
import { pokemon_form_namesScalarWhereInput } from './pokemon-form-names-scalar-where.input';

@InputType()
export class pokemon_form_namesUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [pokemon_form_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_form_namesCreateWithoutLanguagesInput)
    create?: Array<pokemon_form_namesCreateWithoutLanguagesInput>;

    @Field(() => [pokemon_form_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_form_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokemon_form_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokemon_form_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_form_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<pokemon_form_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

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

    @Field(() => [pokemon_form_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_form_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<pokemon_form_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokemon_form_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_form_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<pokemon_form_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [pokemon_form_namesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_form_namesScalarWhereInput)
    deleteMany?: Array<pokemon_form_namesScalarWhereInput>;
}
