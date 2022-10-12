import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_firmness_namesWhereUniqueInput } from '../berry-firmness-names/berry-firmness-names-where-unique.input';
import { Type } from 'class-transformer';
import { berry_firmness_namesCreateInput } from '../berry-firmness-names/berry-firmness-names-create.input';
import { berry_firmness_namesUpdateInput } from '../berry-firmness-names/berry-firmness-names-update.input';

@ArgsType()
export class UpsertOneberryFirmnessNamesArgs {

    @Field(() => berry_firmness_namesWhereUniqueInput, {nullable:false})
    @Type(() => berry_firmness_namesWhereUniqueInput)
    where!: berry_firmness_namesWhereUniqueInput;

    @Field(() => berry_firmness_namesCreateInput, {nullable:false})
    @Type(() => berry_firmness_namesCreateInput)
    create!: berry_firmness_namesCreateInput;

    @Field(() => berry_firmness_namesUpdateInput, {nullable:false})
    @Type(() => berry_firmness_namesUpdateInput)
    update!: berry_firmness_namesUpdateInput;
}
