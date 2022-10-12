import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_proseScalarWhereInput } from './location-area-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { location_area_proseUpdateManyMutationInput } from './location-area-prose-update-many-mutation.input';

@InputType()
export class location_area_proseUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => location_area_proseScalarWhereInput, {nullable:false})
    @Type(() => location_area_proseScalarWhereInput)
    where!: location_area_proseScalarWhereInput;

    @Field(() => location_area_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => location_area_proseUpdateManyMutationInput)
    data!: location_area_proseUpdateManyMutationInput;
}
