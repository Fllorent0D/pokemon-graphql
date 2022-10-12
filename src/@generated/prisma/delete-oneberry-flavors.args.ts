import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_flavorsWhereUniqueInput } from '../berry-flavors/berry-flavors-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneberryFlavorsArgs {

    @Field(() => berry_flavorsWhereUniqueInput, {nullable:false})
    @Type(() => berry_flavorsWhereUniqueInput)
    where!: berry_flavorsWhereUniqueInput;
}
