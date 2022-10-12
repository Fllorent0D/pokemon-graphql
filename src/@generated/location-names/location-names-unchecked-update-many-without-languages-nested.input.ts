import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_namesCreateWithoutLanguagesInput } from './location-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { location_namesCreateOrConnectWithoutLanguagesInput } from './location-names-create-or-connect-without-languages.input';
import { location_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './location-names-upsert-with-where-unique-without-languages.input';
import { location_namesWhereUniqueInput } from './location-names-where-unique.input';
import { location_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './location-names-update-with-where-unique-without-languages.input';
import { location_namesUpdateManyWithWhereWithoutLanguagesInput } from './location-names-update-many-with-where-without-languages.input';
import { location_namesScalarWhereInput } from './location-names-scalar-where.input';

@InputType()
export class location_namesUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [location_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => location_namesCreateWithoutLanguagesInput)
    create?: Array<location_namesCreateWithoutLanguagesInput>;

    @Field(() => [location_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => location_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<location_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [location_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => location_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<location_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [location_namesWhereUniqueInput], {nullable:true})
    @Type(() => location_namesWhereUniqueInput)
    set?: Array<location_namesWhereUniqueInput>;

    @Field(() => [location_namesWhereUniqueInput], {nullable:true})
    @Type(() => location_namesWhereUniqueInput)
    disconnect?: Array<location_namesWhereUniqueInput>;

    @Field(() => [location_namesWhereUniqueInput], {nullable:true})
    @Type(() => location_namesWhereUniqueInput)
    delete?: Array<location_namesWhereUniqueInput>;

    @Field(() => [location_namesWhereUniqueInput], {nullable:true})
    @Type(() => location_namesWhereUniqueInput)
    connect?: Array<location_namesWhereUniqueInput>;

    @Field(() => [location_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => location_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<location_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [location_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => location_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<location_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [location_namesScalarWhereInput], {nullable:true})
    @Type(() => location_namesScalarWhereInput)
    deleteMany?: Array<location_namesScalarWhereInput>;
}
