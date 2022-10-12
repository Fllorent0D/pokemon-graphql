import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_namesCreateWithoutLanguagesInput } from './ability-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { ability_namesCreateOrConnectWithoutLanguagesInput } from './ability-names-create-or-connect-without-languages.input';
import { ability_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './ability-names-upsert-with-where-unique-without-languages.input';
import { ability_namesWhereUniqueInput } from './ability-names-where-unique.input';
import { ability_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './ability-names-update-with-where-unique-without-languages.input';
import { ability_namesUpdateManyWithWhereWithoutLanguagesInput } from './ability-names-update-many-with-where-without-languages.input';
import { ability_namesScalarWhereInput } from './ability-names-scalar-where.input';

@InputType()
export class ability_namesUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [ability_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_namesCreateWithoutLanguagesInput)
    create?: Array<ability_namesCreateWithoutLanguagesInput>;

    @Field(() => [ability_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<ability_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [ability_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<ability_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [ability_namesWhereUniqueInput], {nullable:true})
    @Type(() => ability_namesWhereUniqueInput)
    set?: Array<ability_namesWhereUniqueInput>;

    @Field(() => [ability_namesWhereUniqueInput], {nullable:true})
    @Type(() => ability_namesWhereUniqueInput)
    disconnect?: Array<ability_namesWhereUniqueInput>;

    @Field(() => [ability_namesWhereUniqueInput], {nullable:true})
    @Type(() => ability_namesWhereUniqueInput)
    delete?: Array<ability_namesWhereUniqueInput>;

    @Field(() => [ability_namesWhereUniqueInput], {nullable:true})
    @Type(() => ability_namesWhereUniqueInput)
    connect?: Array<ability_namesWhereUniqueInput>;

    @Field(() => [ability_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<ability_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [ability_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<ability_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [ability_namesScalarWhereInput], {nullable:true})
    @Type(() => ability_namesScalarWhereInput)
    deleteMany?: Array<ability_namesScalarWhereInput>;
}
