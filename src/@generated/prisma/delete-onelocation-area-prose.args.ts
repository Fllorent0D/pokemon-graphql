import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_area_proseWhereUniqueInput } from '../location-area-prose/location-area-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnelocationAreaProseArgs {

    @Field(() => location_area_proseWhereUniqueInput, {nullable:false})
    @Type(() => location_area_proseWhereUniqueInput)
    where!: location_area_proseWhereUniqueInput;
}
