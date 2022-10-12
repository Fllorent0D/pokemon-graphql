import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { region_namesWhereUniqueInput } from './region-names-where-unique.input';
import { Type } from 'class-transformer';
import { region_namesUpdateWithoutRegionsInput } from './region-names-update-without-regions.input';

@InputType()
export class region_namesUpdateWithWhereUniqueWithoutRegionsInput {

    @Field(() => region_namesWhereUniqueInput, {nullable:false})
    @Type(() => region_namesWhereUniqueInput)
    where!: region_namesWhereUniqueInput;

    @Field(() => region_namesUpdateWithoutRegionsInput, {nullable:false})
    @Type(() => region_namesUpdateWithoutRegionsInput)
    data!: region_namesUpdateWithoutRegionsInput;
}
