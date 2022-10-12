import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_proseCreateWithoutLocation_areasInput } from './location-area-prose-create-without-location-areas.input';
import { Type } from 'class-transformer';
import { location_area_proseCreateOrConnectWithoutLocation_areasInput } from './location-area-prose-create-or-connect-without-location-areas.input';
import { location_area_proseUpsertWithWhereUniqueWithoutLocation_areasInput } from './location-area-prose-upsert-with-where-unique-without-location-areas.input';
import { location_area_proseWhereUniqueInput } from './location-area-prose-where-unique.input';
import { location_area_proseUpdateWithWhereUniqueWithoutLocation_areasInput } from './location-area-prose-update-with-where-unique-without-location-areas.input';
import { location_area_proseUpdateManyWithWhereWithoutLocation_areasInput } from './location-area-prose-update-many-with-where-without-location-areas.input';
import { location_area_proseScalarWhereInput } from './location-area-prose-scalar-where.input';

@InputType()
export class location_area_proseUncheckedUpdateManyWithoutLocation_areasNestedInput {

    @Field(() => [location_area_proseCreateWithoutLocation_areasInput], {nullable:true})
    @Type(() => location_area_proseCreateWithoutLocation_areasInput)
    create?: Array<location_area_proseCreateWithoutLocation_areasInput>;

    @Field(() => [location_area_proseCreateOrConnectWithoutLocation_areasInput], {nullable:true})
    @Type(() => location_area_proseCreateOrConnectWithoutLocation_areasInput)
    connectOrCreate?: Array<location_area_proseCreateOrConnectWithoutLocation_areasInput>;

    @Field(() => [location_area_proseUpsertWithWhereUniqueWithoutLocation_areasInput], {nullable:true})
    @Type(() => location_area_proseUpsertWithWhereUniqueWithoutLocation_areasInput)
    upsert?: Array<location_area_proseUpsertWithWhereUniqueWithoutLocation_areasInput>;

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

    @Field(() => [location_area_proseUpdateWithWhereUniqueWithoutLocation_areasInput], {nullable:true})
    @Type(() => location_area_proseUpdateWithWhereUniqueWithoutLocation_areasInput)
    update?: Array<location_area_proseUpdateWithWhereUniqueWithoutLocation_areasInput>;

    @Field(() => [location_area_proseUpdateManyWithWhereWithoutLocation_areasInput], {nullable:true})
    @Type(() => location_area_proseUpdateManyWithWhereWithoutLocation_areasInput)
    updateMany?: Array<location_area_proseUpdateManyWithWhereWithoutLocation_areasInput>;

    @Field(() => [location_area_proseScalarWhereInput], {nullable:true})
    @Type(() => location_area_proseScalarWhereInput)
    deleteMany?: Array<location_area_proseScalarWhereInput>;
}
