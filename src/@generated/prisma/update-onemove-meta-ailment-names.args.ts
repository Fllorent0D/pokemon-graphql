import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_ailment_namesUpdateInput } from '../move-meta-ailment-names/move-meta-ailment-names-update.input';
import { Type } from 'class-transformer';
import { move_meta_ailment_namesWhereUniqueInput } from '../move-meta-ailment-names/move-meta-ailment-names-where-unique.input';

@ArgsType()
export class UpdateOnemoveMetaAilmentNamesArgs {

    @Field(() => move_meta_ailment_namesUpdateInput, {nullable:false})
    @Type(() => move_meta_ailment_namesUpdateInput)
    data!: move_meta_ailment_namesUpdateInput;

    @Field(() => move_meta_ailment_namesWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_ailment_namesWhereUniqueInput)
    where!: move_meta_ailment_namesWhereUniqueInput;
}
