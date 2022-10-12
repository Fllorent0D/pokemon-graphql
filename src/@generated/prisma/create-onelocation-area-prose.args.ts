import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_area_proseCreateInput } from '../location-area-prose/location-area-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnelocationAreaProseArgs {

    @Field(() => location_area_proseCreateInput, {nullable:false})
    @Type(() => location_area_proseCreateInput)
    data!: location_area_proseCreateInput;
}
