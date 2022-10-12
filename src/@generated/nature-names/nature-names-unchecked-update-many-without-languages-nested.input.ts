import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_namesCreateWithoutLanguagesInput } from './nature-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { nature_namesCreateOrConnectWithoutLanguagesInput } from './nature-names-create-or-connect-without-languages.input';
import { nature_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './nature-names-upsert-with-where-unique-without-languages.input';
import { nature_namesWhereUniqueInput } from './nature-names-where-unique.input';
import { nature_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './nature-names-update-with-where-unique-without-languages.input';
import { nature_namesUpdateManyWithWhereWithoutLanguagesInput } from './nature-names-update-many-with-where-without-languages.input';
import { nature_namesScalarWhereInput } from './nature-names-scalar-where.input';

@InputType()
export class nature_namesUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [nature_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => nature_namesCreateWithoutLanguagesInput)
    create?: Array<nature_namesCreateWithoutLanguagesInput>;

    @Field(() => [nature_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => nature_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<nature_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [nature_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => nature_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<nature_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [nature_namesWhereUniqueInput], {nullable:true})
    @Type(() => nature_namesWhereUniqueInput)
    set?: Array<nature_namesWhereUniqueInput>;

    @Field(() => [nature_namesWhereUniqueInput], {nullable:true})
    @Type(() => nature_namesWhereUniqueInput)
    disconnect?: Array<nature_namesWhereUniqueInput>;

    @Field(() => [nature_namesWhereUniqueInput], {nullable:true})
    @Type(() => nature_namesWhereUniqueInput)
    delete?: Array<nature_namesWhereUniqueInput>;

    @Field(() => [nature_namesWhereUniqueInput], {nullable:true})
    @Type(() => nature_namesWhereUniqueInput)
    connect?: Array<nature_namesWhereUniqueInput>;

    @Field(() => [nature_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => nature_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<nature_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [nature_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => nature_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<nature_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [nature_namesScalarWhereInput], {nullable:true})
    @Type(() => nature_namesScalarWhereInput)
    deleteMany?: Array<nature_namesScalarWhereInput>;
}
