import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_color_namesCreateWithoutLanguagesInput } from './pokemon-color-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokemon_color_namesCreateOrConnectWithoutLanguagesInput } from './pokemon-color-names-create-or-connect-without-languages.input';
import { pokemon_color_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './pokemon-color-names-upsert-with-where-unique-without-languages.input';
import { pokemon_color_namesWhereUniqueInput } from './pokemon-color-names-where-unique.input';
import { pokemon_color_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './pokemon-color-names-update-with-where-unique-without-languages.input';
import { pokemon_color_namesUpdateManyWithWhereWithoutLanguagesInput } from './pokemon-color-names-update-many-with-where-without-languages.input';
import { pokemon_color_namesScalarWhereInput } from './pokemon-color-names-scalar-where.input';

@InputType()
export class pokemon_color_namesUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [pokemon_color_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_color_namesCreateWithoutLanguagesInput)
    create?: Array<pokemon_color_namesCreateWithoutLanguagesInput>;

    @Field(() => [pokemon_color_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_color_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokemon_color_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokemon_color_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_color_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<pokemon_color_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokemon_color_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_color_namesWhereUniqueInput)
    set?: Array<pokemon_color_namesWhereUniqueInput>;

    @Field(() => [pokemon_color_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_color_namesWhereUniqueInput)
    disconnect?: Array<pokemon_color_namesWhereUniqueInput>;

    @Field(() => [pokemon_color_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_color_namesWhereUniqueInput)
    delete?: Array<pokemon_color_namesWhereUniqueInput>;

    @Field(() => [pokemon_color_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_color_namesWhereUniqueInput)
    connect?: Array<pokemon_color_namesWhereUniqueInput>;

    @Field(() => [pokemon_color_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_color_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<pokemon_color_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokemon_color_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_color_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<pokemon_color_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [pokemon_color_namesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_color_namesScalarWhereInput)
    deleteMany?: Array<pokemon_color_namesScalarWhereInput>;
}
