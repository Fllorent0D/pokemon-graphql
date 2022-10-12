import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_area_proseUpdateInput } from '../location-area-prose/location-area-prose-update.input';
import { Type } from 'class-transformer';
import { location_area_proseWhereUniqueInput } from '../location-area-prose/location-area-prose-where-unique.input';

@ArgsType()
export class UpdateOnelocationAreaProseArgs {

    @Field(() => location_area_proseUpdateInput, {nullable:false})
    @Type(() => location_area_proseUpdateInput)
    data!: location_area_proseUpdateInput;

    @Field(() => location_area_proseWhereUniqueInput, {nullable:false})
    @Type(() => location_area_proseWhereUniqueInput)
    where!: location_area_proseWhereUniqueInput;
}
