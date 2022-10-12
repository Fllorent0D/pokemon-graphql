import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_typesWhereInput } from '../contest-types/contest-types-where.input';

@InputType()
export class Contest_typesRelationFilter {

    @Field(() => contest_typesWhereInput, {nullable:true})
    is?: contest_typesWhereInput;

    @Field(() => contest_typesWhereInput, {nullable:true})
    isNot?: contest_typesWhereInput;
}
