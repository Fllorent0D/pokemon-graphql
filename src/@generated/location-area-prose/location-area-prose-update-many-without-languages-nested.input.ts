import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_proseCreateWithoutLanguagesInput } from './location-area-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { location_area_proseCreateOrConnectWithoutLanguagesInput } from './location-area-prose-create-or-connect-without-languages.input';
import { location_area_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './location-area-prose-upsert-with-where-unique-without-languages.input';
import { location_area_proseWhereUniqueInput } from './location-area-prose-where-unique.input';
import { location_area_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './location-area-prose-update-with-where-unique-without-languages.input';
import { location_area_proseUpdateManyWithWhereWithoutLanguagesInput } from './location-area-prose-update-many-with-where-without-languages.input';
import { location_area_proseScalarWhereInput } from './location-area-prose-scalar-where.input';

@InputType()
export class location_area_proseUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [location_area_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => location_area_proseCreateWithoutLanguagesInput)
    create?: Array<location_area_proseCreateWithoutLanguagesInput>;

    @Field(() => [location_area_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => location_area_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<location_area_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [location_area_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => location_area_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<location_area_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [location_area_proseWhereUniqueInput], {nullable:true})
    @Type(() => location_area_proseWhereUniqueInput)
    set?: Array<location_area_proseWhereUniqueInput>;

    @Field(() => [location_area_proseWhereUniqueInput], {nullable:true})
    @Type(() => location_area_proseWhereUniqueInput)
    disconnect?: Array<location_area_proseWhereUniqueInput>;

    @Field(() => [location_area_proseWhereUniqueInput], {nullable:true})
    @Type(() => location_area_proseWhereUniqueInput)
    delete?: Array<location_area_proseWhereUniqueInput>;

    @Field(() => [location_area_proseWhereUniqueInput], {nullable:true})
    @Type(() => location_area_proseWhereUniqueInput)
    connect?: Array<location_area_proseWhereUniqueInput>;

    @Field(() => [location_area_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => location_area_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<location_area_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [location_area_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => location_area_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<location_area_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [location_area_proseScalarWhereInput], {nullable:true})
    @Type(() => location_area_proseScalarWhereInput)
    deleteMany?: Array<location_area_proseScalarWhereInput>;
}
