import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { region_namesCreateWithoutLanguagesInput } from './region-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { region_namesCreateOrConnectWithoutLanguagesInput } from './region-names-create-or-connect-without-languages.input';
import { region_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './region-names-upsert-with-where-unique-without-languages.input';
import { region_namesWhereUniqueInput } from './region-names-where-unique.input';
import { region_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './region-names-update-with-where-unique-without-languages.input';
import { region_namesUpdateManyWithWhereWithoutLanguagesInput } from './region-names-update-many-with-where-without-languages.input';
import { region_namesScalarWhereInput } from './region-names-scalar-where.input';

@InputType()
export class region_namesUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [region_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => region_namesCreateWithoutLanguagesInput)
    create?: Array<region_namesCreateWithoutLanguagesInput>;

    @Field(() => [region_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => region_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<region_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [region_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => region_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<region_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [region_namesWhereUniqueInput], {nullable:true})
    @Type(() => region_namesWhereUniqueInput)
    set?: Array<region_namesWhereUniqueInput>;

    @Field(() => [region_namesWhereUniqueInput], {nullable:true})
    @Type(() => region_namesWhereUniqueInput)
    disconnect?: Array<region_namesWhereUniqueInput>;

    @Field(() => [region_namesWhereUniqueInput], {nullable:true})
    @Type(() => region_namesWhereUniqueInput)
    delete?: Array<region_namesWhereUniqueInput>;

    @Field(() => [region_namesWhereUniqueInput], {nullable:true})
    @Type(() => region_namesWhereUniqueInput)
    connect?: Array<region_namesWhereUniqueInput>;

    @Field(() => [region_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => region_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<region_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [region_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => region_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<region_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [region_namesScalarWhereInput], {nullable:true})
    @Type(() => region_namesScalarWhereInput)
    deleteMany?: Array<region_namesScalarWhereInput>;
}
