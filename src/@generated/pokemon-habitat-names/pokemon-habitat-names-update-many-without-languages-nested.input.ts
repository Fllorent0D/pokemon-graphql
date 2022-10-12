import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitat_namesCreateWithoutLanguagesInput } from './pokemon-habitat-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokemon_habitat_namesCreateOrConnectWithoutLanguagesInput } from './pokemon-habitat-names-create-or-connect-without-languages.input';
import { pokemon_habitat_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './pokemon-habitat-names-upsert-with-where-unique-without-languages.input';
import { pokemon_habitat_namesWhereUniqueInput } from './pokemon-habitat-names-where-unique.input';
import { pokemon_habitat_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './pokemon-habitat-names-update-with-where-unique-without-languages.input';
import { pokemon_habitat_namesUpdateManyWithWhereWithoutLanguagesInput } from './pokemon-habitat-names-update-many-with-where-without-languages.input';
import { pokemon_habitat_namesScalarWhereInput } from './pokemon-habitat-names-scalar-where.input';

@InputType()
export class pokemon_habitat_namesUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [pokemon_habitat_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_habitat_namesCreateWithoutLanguagesInput)
    create?: Array<pokemon_habitat_namesCreateWithoutLanguagesInput>;

    @Field(() => [pokemon_habitat_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_habitat_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokemon_habitat_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokemon_habitat_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_habitat_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<pokemon_habitat_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokemon_habitat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_habitat_namesWhereUniqueInput)
    set?: Array<pokemon_habitat_namesWhereUniqueInput>;

    @Field(() => [pokemon_habitat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_habitat_namesWhereUniqueInput)
    disconnect?: Array<pokemon_habitat_namesWhereUniqueInput>;

    @Field(() => [pokemon_habitat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_habitat_namesWhereUniqueInput)
    delete?: Array<pokemon_habitat_namesWhereUniqueInput>;

    @Field(() => [pokemon_habitat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_habitat_namesWhereUniqueInput)
    connect?: Array<pokemon_habitat_namesWhereUniqueInput>;

    @Field(() => [pokemon_habitat_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_habitat_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<pokemon_habitat_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokemon_habitat_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_habitat_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<pokemon_habitat_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [pokemon_habitat_namesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_habitat_namesScalarWhereInput)
    deleteMany?: Array<pokemon_habitat_namesScalarWhereInput>;
}
