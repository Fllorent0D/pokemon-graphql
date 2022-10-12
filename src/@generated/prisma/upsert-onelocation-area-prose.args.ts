import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_area_proseWhereUniqueInput } from '../location-area-prose/location-area-prose-where-unique.input';
import { Type } from 'class-transformer';
import { location_area_proseCreateInput } from '../location-area-prose/location-area-prose-create.input';
import { location_area_proseUpdateInput } from '../location-area-prose/location-area-prose-update.input';

@ArgsType()
export class UpsertOnelocationAreaProseArgs {

    @Field(() => location_area_proseWhereUniqueInput, {nullable:false})
    @Type(() => location_area_proseWhereUniqueInput)
    where!: location_area_proseWhereUniqueInput;

    @Field(() => location_area_proseCreateInput, {nullable:false})
    @Type(() => location_area_proseCreateInput)
    create!: location_area_proseCreateInput;

    @Field(() => location_area_proseUpdateInput, {nullable:false})
    @Type(() => location_area_proseUpdateInput)
    update!: location_area_proseUpdateInput;
}
