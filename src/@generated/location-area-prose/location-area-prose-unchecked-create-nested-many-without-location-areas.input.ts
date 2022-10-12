import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_proseCreateWithoutLocation_areasInput } from './location-area-prose-create-without-location-areas.input';
import { Type } from 'class-transformer';
import { location_area_proseCreateOrConnectWithoutLocation_areasInput } from './location-area-prose-create-or-connect-without-location-areas.input';
import { location_area_proseWhereUniqueInput } from './location-area-prose-where-unique.input';

@InputType()
export class location_area_proseUncheckedCreateNestedManyWithoutLocation_areasInput {

    @Field(() => [location_area_proseCreateWithoutLocation_areasInput], {nullable:true})
    @Type(() => location_area_proseCreateWithoutLocation_areasInput)
    create?: Array<location_area_proseCreateWithoutLocation_areasInput>;

    @Field(() => [location_area_proseCreateOrConnectWithoutLocation_areasInput], {nullable:true})
    @Type(() => location_area_proseCreateOrConnectWithoutLocation_areasInput)
    connectOrCreate?: Array<location_area_proseCreateOrConnectWithoutLocation_areasInput>;

    @Field(() => [location_area_proseWhereUniqueInput], {nullable:true})
    @Type(() => location_area_proseWhereUniqueInput)
    connect?: Array<location_area_proseWhereUniqueInput>;
}
