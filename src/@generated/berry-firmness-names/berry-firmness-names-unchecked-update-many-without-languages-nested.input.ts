import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmness_namesCreateWithoutLanguagesInput } from './berry-firmness-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { berry_firmness_namesCreateOrConnectWithoutLanguagesInput } from './berry-firmness-names-create-or-connect-without-languages.input';
import { berry_firmness_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './berry-firmness-names-upsert-with-where-unique-without-languages.input';
import { berry_firmness_namesWhereUniqueInput } from './berry-firmness-names-where-unique.input';
import { berry_firmness_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './berry-firmness-names-update-with-where-unique-without-languages.input';
import { berry_firmness_namesUpdateManyWithWhereWithoutLanguagesInput } from './berry-firmness-names-update-many-with-where-without-languages.input';
import { berry_firmness_namesScalarWhereInput } from './berry-firmness-names-scalar-where.input';

@InputType()
export class berry_firmness_namesUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [berry_firmness_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => berry_firmness_namesCreateWithoutLanguagesInput)
    create?: Array<berry_firmness_namesCreateWithoutLanguagesInput>;

    @Field(() => [berry_firmness_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => berry_firmness_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<berry_firmness_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [berry_firmness_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => berry_firmness_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<berry_firmness_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [berry_firmness_namesWhereUniqueInput], {nullable:true})
    @Type(() => berry_firmness_namesWhereUniqueInput)
    set?: Array<berry_firmness_namesWhereUniqueInput>;

    @Field(() => [berry_firmness_namesWhereUniqueInput], {nullable:true})
    @Type(() => berry_firmness_namesWhereUniqueInput)
    disconnect?: Array<berry_firmness_namesWhereUniqueInput>;

    @Field(() => [berry_firmness_namesWhereUniqueInput], {nullable:true})
    @Type(() => berry_firmness_namesWhereUniqueInput)
    delete?: Array<berry_firmness_namesWhereUniqueInput>;

    @Field(() => [berry_firmness_namesWhereUniqueInput], {nullable:true})
    @Type(() => berry_firmness_namesWhereUniqueInput)
    connect?: Array<berry_firmness_namesWhereUniqueInput>;

    @Field(() => [berry_firmness_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => berry_firmness_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<berry_firmness_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [berry_firmness_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => berry_firmness_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<berry_firmness_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [berry_firmness_namesScalarWhereInput], {nullable:true})
    @Type(() => berry_firmness_namesScalarWhereInput)
    deleteMany?: Array<berry_firmness_namesScalarWhereInput>;
}
